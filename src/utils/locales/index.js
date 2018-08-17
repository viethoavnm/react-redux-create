import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';

const dfMessages = require('./en.json');
const dfLocale = require('react-intl/locale-data/en');
export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGE = 'lang';
export const ASSETS_PATH = './';

class IntlWrapper extends React.Component {
  constructor(props) {
    super(props);
    addLocaleData(dfLocale);
    this.state = {
      locale: DEFAULT_LANGUAGE,
      messages: dfMessages
    }
    if (props.lang !== DEFAULT_LANGUAGE)
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
      messages = dfMessages;
    }
    this.setState({ locale, messages });
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.props.lang !== prevProps.lang) {
      this.loadLocale(this.props.lang);
    }
  }

  render() {
    return (<IntlProvider {...this.state}>
      {React.Children.only(this.props.children)}
    </IntlProvider>)
  }
}

export default connect((state) => ({ lang: state.common.locale }))(IntlWrapper);