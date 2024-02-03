<script setup>
    import { supportedLanguages, setUserLangugage } from "../helpers/translationHelper.js"

    const handleLanguageSelection = (langId) => () => {
        setUserLangugage(langId)
    }
</script>

<template>
    <div class="lang-list">
        <div
            class="lang-opt"
            v-for="(language, languageKey) in supportedLanguages"
            :onClick="handleLanguageSelection(languageKey)"
        >
            {{ language }}
        </div>
    </div>
</template>

<style scoped>
    .lang-list {
        --hover-background: rgba(var(--accent-rgb), .4);

        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
        padding: 0 3rem;

        .lang-opt {
            padding: .5rem 0;
            text-align: center;
            border-radius: var(--border-radius);
            border: 2px solid rgba(var(--accent-rgb), .6);
            background: var(--transparent);
            background-image: linear-gradient(var(--hover-background), var(--hover-background));
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: 0% 100%;
            transition: background-size .35s, border .35s;

            &:hover {
                cursor: pointer;
                border: 2px solid var(--accent);
                background-size: 100% 100%;
            }
        }
    }
</style>