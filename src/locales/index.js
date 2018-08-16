import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import dfInject from 'react-intl/locale-data/en';
import dfMessages from './en.json';

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE = 'lang';
export const ASSETS_PATH = './';

class Intl extends React.Component {
  constructor(props) {
    super(props);
    addLocaleData(dfInject);
    this.state = {
      locale: DEFAULT_LANGUAGE,
      messages: dfMessages
    }
    this.loadLocale(props.lang);
  }

  async loadLocale(lang) {
    let locale = lang, intl, messages = {};
    try {
      intl = await import(`react-intl/locale-data/${locale}`);
      addLocaleData(intl);
      messages = await import(`${ASSETS_PATH + locale}.json`);
    } catch (e) {
      locale = DEFAULT_LANGUAGE;
      intl = await import(`react-intl/locale-data/${locale}`);
      addLocaleData(intl);
      messages = await import(`${ASSETS_PATH + locale}.json`);
    }
    this.setState({ locale, messages });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextState.messages) !== JSON.stringify(this.state.messages))
      return true;
    return nextState.locale !== this.state.locale;
  }

  render() {
    return (<IntlProvider {...this.state}>
      {React.Children.only(this.props.children)}
    </IntlProvider>)
  }
}

export default connect((state) => ({ lang: state.common.locale }))(Intl);