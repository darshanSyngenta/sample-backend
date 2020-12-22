import React, { ErrorInfo } from 'react';
import { useTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  public static getDerivedStateFromError() {
    return { hasError: true };
  }
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  public componentDidCatch(error: Error, info: ErrorInfo) {
    // tslint:disable-next-line:no-console
    console.error(error, info);
  }
  public render() {
    if (this.state.hasError) {
      const { t } = useTranslation();
      return <h1>{t('Something went wrong.')}</h1>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
