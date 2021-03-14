import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from 'next/head';
import IconsCollection from "../components/Icon/IconsCollection";
import { StylesProvider, createMuiTheme, ThemeProvider } from "@material-ui/core";
import PropTypes from 'prop-types';
import "../styles/main.scss";
import { useEffect } from "react";


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'ProximaNova',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontWeightRegular: 100
    }
});

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>  
            <Head>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <StylesProvider injectFirst>
                <Header />
                <IconsCollection />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
                <Footer />
            </StylesProvider>
        </>
    );
}

export default MyApp;
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};