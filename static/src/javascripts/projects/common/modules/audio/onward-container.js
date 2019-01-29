// @flow

import config from 'lib/config';
import { Component } from 'common/modules/component';

const createComponent = (
    el: HTMLElement,
    endpoint: string,
    manipulationType: string
): Promise<void> => {
    const component = new Component();

    component.manipulationType = manipulationType;
    component.endpoint = `${endpoint}?shortUrl=${config.page.shortUrl}`;
    el.innerHTML = '';

    return component.fetch(el, 'html');
};

const onwardAudio = (el: HTMLElement) => {
    if (config.page.seriesId) {
        const manipulationType = 'append';
        const endpoint = `/audio/series/${config.page.seriesId}.json`;

        createComponent(el, endpoint, manipulationType);
    }
};

export { onwardAudio };
