// @flow
import React, { Component } from 'preact-compat';

type BlockProps = {
    title: string,
    subtitle: ?string,
    withGrid: ?boolean,
    children: any,
};

export class Block extends Component<BlockProps> {
    render() {
        const { title, subtitle, children, withGrid } = this.props;
        return (
            <section
                className={[
                    'identity-upsell-block',
                    withGrid ? 'identity-upsell-block--with-grid' : '',
                ].join(' ')}>
                <div className="identity-upsell-title">
                    <h2 className="identity-upsell-title__title">{title}</h2>
                    {subtitle && (
                        <h3 className="identity-upsell-title__subtitle">
                            {subtitle}
                        </h3>
                    )}
                </div>
                <div className="identity-upsell-block__container">
                    {children}
                </div>
            </section>
        );
    }
}