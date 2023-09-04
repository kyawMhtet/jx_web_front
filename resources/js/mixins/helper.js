
import Choices from 'choices.js';

export default {
    methods: {
        counter() {
            const counters = document.querySelectorAll(".counter-value");
            const speed = 250;

            if (counters.length) {
                counters.forEach((counter) => {
                    const target = +counter.getAttribute("data-target");
                    const inc = target / speed;

                    let count = 0;
                    const updateCount = () => {
                        count += inc;
                        if (count < target) {
                            counter.innerText = this.numberWithCommas(count.toFixed(0));
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = this.numberWithCommas(target);
                        }
                    };
                    updateCount();
                });
            }
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

        choicesGenerate() {
            var choicesExamples = document.querySelectorAll("[data-choices]");
            Array.from(choicesExamples).forEach(function (item) {
                var choiceData = {};
                var isChoicesVal = item.attributes;
                if (isChoicesVal["data-choices-groups"])
                    choiceData.placeholderValue = "This is a placeholder set in the config";
                if (isChoicesVal["data-choices-search-false"])
                    choiceData.searchEnabled = false;
                if (isChoicesVal["data-choices-search-true"])
                    choiceData.searchEnabled = true;
                if (isChoicesVal["data-choices-removeItem"])
                    choiceData.removeItemButton = true;
                if (isChoicesVal["data-choices-sorting-false"])
                    choiceData.shouldSort = false;
                if (isChoicesVal["data-choices-sorting-true"])
                    choiceData.shouldSort = true;
                if (isChoicesVal["data-choices-multiple-remove"])
                    choiceData.removeItemButton = true;
                if (isChoicesVal["data-choices-limit"])
                    choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
                if (isChoicesVal["data-choices-limit"])
                    choiceData.maxItemCount = isChoicesVal["data-choices-limit"].value.toString();
                if (isChoicesVal["data-choices-editItem-true"])
                    choiceData.maxItemCount = true;
                if (isChoicesVal["data-choices-editItem-false"])
                    choiceData.maxItemCount = false;
                if (isChoicesVal["data-choices-text-unique-true"])
                    choiceData.duplicateItemsAllowed = false;
                if (isChoicesVal["data-choices-text-disabled-true"])
                    choiceData.addItems = false;
                isChoicesVal["data-choices-text-disabled-true"] ? new Choices(item, choiceData).disable() : new Choices(item, choiceData);
            });
        }
    }
}