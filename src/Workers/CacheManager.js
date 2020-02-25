class CacheManager {
    async load(key) {
        const value = localStorage.getItem(key);
        if (!value) return null;

        try {
            return JSON.parse(value);
        } catch {
            return null;
        }
    }

    async save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    async remove(key) {
        localStorage.removeItem(key);
    }

    async clear() {
        localStorage.clear();
    }
}

const manager = new CacheManager();
export default manager;
