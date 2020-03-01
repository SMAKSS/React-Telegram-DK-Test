import EventEmitter from './EventEmitter';
import i18n from 'i18next';
import LocalizationCache from '../Localization/Cache';
import { initReactI18next } from 'react-i18next';
import TdLibController from '../Controllers/TdLibController';

const fallbackLng = 'en';
const defaultNS = 'translation';
const lng = localStorage.getItem('i18next') || fallbackLng;

i18n.use(initReactI18next).init({
    ns: [defaultNS, 'local'],
    defaultNS,
    fallbackNS: ['local', 'emoji', 'settings', 'translation'],
    resources: {
        en: {
            settings: {
                ContactJoinedEnabled: 'Enabled',
                ContactJoinedDisabled: 'Disabled',
                NotificationsEnabled: 'Enabled',
                NotificationsDisabled: 'Disabled',
                PreviewEnabled: 'Enabled',
                PreviewDisabled: 'Disabled',
                BioAbout: 'Any details such as age, occupation or city.\nExample: 23 y.o. designer from San Francisco.',
                Archived: 'Archived',
                Saved: 'Saved',
                EditProfile: 'Edit Profile',
                GeneralSettings: 'General Settings'
            },
            local: {
                PollQuizOneRightAnswer: 'Quiz has only one right answer.',
                LeftChannel: 'Left channel',
                LeftGroup: 'Left group',
                EnterPassword: 'Enter a Password',
                YourAccountProtectedWithPassword: 'Your account is protected with an additional password.',
                DeletedMessage: 'Deleted message',
                YourPhone: 'Your Phone',
                SignInToTelegram: 'Sign in to Telegram',
                PhoneNumber: 'Phone Number',
                Country: 'Country',
                KeepMeSignedIn: 'Keep me signed in',
                StartText: 'Please confirm your country code and enter your phone number.',
                Next: 'Next',
                InvalidPhoneNumber: 'Invalid phone number. Please check the number and try again.',
                More: 'More',
                SendFileConfirmation: 'Are you sure you want to send file?',
                SendFilesConfirmation: 'Are you sure you want to send files?',
                SendMessage: 'Send Message',
                ChatInfo: 'Chat Info',
                ChannelInfo: 'Channel Info',
                Stickers: 'STICKERS',
                Emoji: 'EMOJI',
                SelectChatToStartMessaging: 'Please select a chat to start messaging',
                Text: 'Text',
                ViewChannelInfo: 'View channel info',
                ViewGroupInfo: 'View group info',
                ViewProfile: 'View profile',
                GoToMessage: 'Go to message',
                PhotosTitle: 'Photos',
                VideosTitle: 'Videos',
                VoiceTitle: 'Voice messages',
                UpdateDraftConfirmation: 'Are you sure you want to update draft?'
            },
            emoji: {
                Search: 'Search',
                NotEmojiFound: 'No Emoji Found',
                ChooseDefaultSkinTone: 'Choose your default skin tone',
                SearchResults: 'Search Results',
                Recent: 'Frequently Used',
                SmileysPeople: 'Smileys & People',
                AnimalsNature: 'Animals & Nature',
                FoodDrink: 'Food & Drink',
                Activity: 'Activity',
                TravelPlaces: 'Travel & Places',
                Objects: 'Objects',
                Symbols: 'Symbols',
                Flags: 'Flags',
                Custom: 'Custom'
            },
            translation: {
                AppName: 'Telegram',
                Connecting: 'Connecting...',
                ConnectingToProxy: 'Connecting to proxy...',
                Loading: 'Loading...',
                Updating: 'Updating...',
                WaitingForNetwork: 'Waiting for network...',
                ContinueOnThisLanguage: 'Continue in English'
            }
        }
    },
    lng,
    fallbackLng,
    interpolation: {
        escapeValue: false
    },
    react: {
        wait: false
    }
});

const cache = new LocalizationCache(null, {
    enabled: true,
    prefix: 'i18next_res_',
    expirationTime: Infinity
});

const defaultResources = cache.read(fallbackLng, defaultNS, (err, data) => data);
const currentResources = cache.read(lng, defaultNS, (err, data) => data);

i18n.addResourceBundle(fallbackLng, defaultNS, defaultResources);
i18n.addResourceBundle(lng, defaultNS, currentResources);

class LocalizationStore extends EventEmitter {
    constructor() {
        super();

        this.fallbackLng = fallbackLng;
        this.i18n = i18n;
        this.cache = cache;

        this.addTdLibListener();
    }

    addTdLibListener = () => {
        TdLibController.on('update', this.onUpdate);
        TdLibController.on('clientUpdate', this.onClientUpdate);
    };

    removeTdLibListener = () => {
        TdLibController.off('update', this.onUpdate);
        TdLibController.off('clientUpdate', this.onClientUpdate);
    };

    onUpdate = async update => {
        switch (update['@type']) {
            case 'updateAuthorizationState': {
                switch (update.authorization_state['@type']) {
                    case 'authorizationStateWaitTdlibParameters':
                        TdLibController.send({
                            '@type': 'setOption',
                            name: 'localization_target',
                            value: { '@type': 'optionValueString', value: 'android' }
                        });

                        TdLibController.send({
                            '@type': 'setOption',
                            name: 'language_pack_id',
                            value: { '@type': 'optionValueString', value: lng }
                        });

                        this.info = await TdLibController.send({
                            '@type': 'getLocalizationTargetInfo',
                            only_local: false
                        });

                        TdLibController.clientUpdate({
                            '@type': 'clientUpdateLanguageChange',
                            language: lng
                        });
                        break;
                    default:
                        break;
                }
                break;
            }
            case 'updateLanguagePackStrings': {
                // add/remove new strings

                this.emit('updateLanguagePackStrings', update);
                break;
            }
            default:
                break;
        }
    };

    onClientUpdate = async update => {
        switch (update['@type']) {
            case 'clientUpdateLanguageChange': {
                const { language } = update;

                await this.loadLanguage(language);

                localStorage.setItem('i18next', language);

                await i18n.changeLanguage(language);

                TdLibController.send({
                    '@type': 'setOption',
                    name: 'language_pack_id',
                    value: { '@type': 'optionValueString', value: language }
                });

                this.emit('clientUpdateLanguageChange', update);
                break;
            }
            default:
                break;
        }
    };

    processStrings = (lng, languagePackStrings) => {
        if (!languagePackStrings) return {};
        const { strings } = languagePackStrings;
        if (!strings) return {};

        let result = {};
        for (let i = 0; i < strings.length; i++) {
            const { value } = strings[i];
            switch (value['@type']) {
                case 'languagePackStringValueOrdinary': {
                    result[strings[i].key] = value.value;
                    break;
                }
                case 'languagePackStringValuePluralized': {
                    if (value.zero_value) {
                        result[strings[i].key + 'Z'] = value.zero_value;
                    }
                    if (value.one_value) {
                        result[strings[i].key + 'O'] = value.one_value;
                    }
                    if (value.two_value) {
                        result[strings[i].key + 'T'] = value.two_value;
                    }
                    if (value.few_value) {
                        result[strings[i].key + 'F'] = value.few_value;
                    }
                    if (value.many_value) {
                        result[strings[i].key + 'M'] = value.many_value;
                    }
                    if (value.other_value) {
                        result[strings[i].key + 'OT'] = value.other_value;
                    }
                    break;
                }
                case 'languagePackStringValueDeleted': {
                    break;
                }
                default:
                    break;
            }
        }

        return result;
    };

    loadLanguage = async language => {
        const result = await TdLibController.send({
            '@type': 'getLanguagePackStrings',
            language_pack_id: language,
            keys: []
        });

        const resources = this.processStrings(language, result);
        this.cache.save(language, defaultNS, resources);
        i18n.addResourceBundle(language, defaultNS, resources);
    };
}

const store = new LocalizationStore();
window.localization = store;
export default store;
