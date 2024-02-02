<script setup>
    import { supportedLanguages, getTranslation, setUserLangugage } from "../helpers/translationHelper.js"

    const handleLanguageSelection = (langId) => () => {
        setUserLangugage(langId)
    }
</script>

<template>
    <span class="language-picker-wrapper">
        <FaIcon
            class="language-picker"
            icon="language"
            :fixedWidth="true"
        />
        <div class="language-options">
            <div class="lang-opt label">
                {{ getTranslation("language") }}
            </div>
            <div
                class="lang-opt"
                v-for="(language, languageKey) in supportedLanguages"
                :onClick="handleLanguageSelection(languageKey)"
            >
                {{ language }}
            </div>
        </div>
    </span>
</template>

<style scoped>
    .language-picker-wrapper {
        --picker-color: rgba(var(--accent-rgb), .7);

        position: relative;

        .language-picker {
            display: block;
            user-select: none;
            cursor: pointer;
            width: 1.2rem;
            height: 1.2rem;
            padding: .5rem;
            border-radius: 50%;
            border: 1px solid var(--picker-color);
            background: transparent;
            color: var(--picker-color);
        }
        
        .language-options {
            position: absolute;
            top: 0;
            right: 0;
            display: none;
            background: var(--background);

            .lang-opt {
                &.label {
                    font-weight: bold;
                }

                &:not(.label):hover {
                    cursor: pointer;
                    color: var(--accent);
                }
            }
        }
        
        &:hover {
            .language-options {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                padding: .5rem;
                border-radius: 15px;
            }

            .language-picker {
                border: 1px solid var(--accent);
                background: rgba(var(--accent-rgb), .3);
                color: var(--accent);
            }
        }
    }
</style>