import { plugin as TippyPlugin } from 'vue-tippy';
import { setDefaultProps } from 'vue-tippy';
import { directive } from 'vue-tippy';

setDefaultProps({
    arrow: false,
    animation: 'shift-toward',
    delay: [200, 0],
    duration: [700, 400],
    offset: [0, 4],
    placement: 'right',
    inertia: true,
    trigger: 'mouseenter focus',
    zIndex: 9999,
    appendTo: () => document.body,
})

export default defineNuxtPlugin((app) => {
    app.vueApp.directive('tippy', directive);
    return {
        provide: {
            tippy: TippyPlugin,
        }
    }
});