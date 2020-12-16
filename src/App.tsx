import { CssBaseline } from '@material-ui/core';
import { ReactElement, useState } from 'react';
import Sales from './pages/Sales';
import Signature from './pages/Signature';
import SlipView from './pages/SlipView';
import { ScreenMode } from './types';

function App(): ReactElement {
    const [screen, setScreen] = useState<ScreenMode>('sales');

    const goSales = () => {
        setScreen('sales');
    };

    const goSlip = () => {
        setScreen('slip');
    };

    const goSignature = () => {
        setScreen('signature');
    };

    return (
        <>
            <CssBaseline />
            {screen === 'sales' && <Sales goSlip={goSlip} />}
            {screen === 'slip' && <SlipView goBack={goSales} goSignature={goSignature} />}
            {screen === 'signature' && <Signature goBack={goSlip} />}
        </>
    );
}

export default App;
