import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { firebaseAuth } from './firebase';
import { Routes } from './routes';
import { getUserInfo } from './app/store/actions/user';
import { RootState } from './app/store';
import { changeLocal } from './app/store/actions/local';
import messages_ru from './lang/ru.json';

const messages = {
    ru: messages_ru,
    en: {},
};

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            dispatch(getUserInfo(user?.uid));
        });
    }, []);

    const lang = useSelector((state: RootState) => state.local);

    const handleChangeLang = () => {
        if (lang === 'en') {
            dispatch(changeLocal('ru'));
        } else {
            dispatch(changeLocal('en'));
        }
    };

    return (
        <IntlProvider
            // @ts-ignore
            messages={messages[lang]}
            locale={lang}
            defaultLocale='en'
        >
            <div onClick={handleChangeLang}>change lang</div>
            <Suspense
                fallback={
                    <div>
                        <FormattedMessage
                            id='test'
                            defaultMessage='Loading...'
                        />
                    </div>
                }
            >
                <Routes />
            </Suspense>
        </IntlProvider>
    );
}

export default App;
