import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tac-toe";
import RandomColor from "../random-color";
import Accordion from "../accordion";
import TreeView from "../tree-view";
import {useContext} from "react";
import {FeatureFlagsContext} from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tabs-test";


export default function FeatureFlags() {
    const {loading, enabledFlags} = useContext(FeatureFlagsContext)


    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
        {
            key: 'showTabs',
            component: <TabTest />
        },
    ]

    const checkEnabledFlags = (getCurrentKey) => {
        return enabledFlags[getCurrentKey]
    }

    if (loading) {
        return (
            <h1>Data is loading, please, wait...</h1>
        )
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(
                    componentItem => checkEnabledFlags(componentItem.key) ?
                    componentItem.component : null
                )
            }
        </div>
    )
}