import TdLibController from '../Controllers/TdLibController';

export function setPollAnswer(chatId, messageId, optionIds) {
    TdLibController.send({
        '@type': 'setPollAnswer',
        chat_id: chatId,
        message_id: messageId,
        option_ids: optionIds
    });
}

export function cancelPollAnswer(chatId, messageId) {
    TdLibController.send({
        '@type': 'setPollAnswer',
        chat_id: chatId,
        message_id: messageId,
        option_ids: []
    });
}

export function stopPoll(chatId, messageId) {
    TdLibController.send({
        '@type': 'stopPoll',
        chat_id: chatId,
        message_id: messageId,
        reply_markup: null
    });
}
