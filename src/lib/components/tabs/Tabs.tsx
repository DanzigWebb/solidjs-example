import { Accessor, Component, createContext, createSignal, For, JSXElement, useContext } from 'solid-js';

type TabsContext = {
    tab: Accessor<number>;
    tabContent: JSXElement;
    setTab: (tab: number) => void;
    setTabContent: (content: JSXElement) => void;
}

const TabsContext = createContext<TabsContext>();

type Props = {
    tabList: JSXElement[];
}

export const Tabs: Component<Props> = (props) => {

    const [tab, setTab] = createSignal<number>(0);
    const [tabContent, setTabContent] = createSignal<JSXElement>();

    const store: TabsContext = {
        tab,
        tabContent,
        setTab(tab) {
            setTab(tab);
        },
        setTabContent(content) {
            setTabContent(content);
        }
    };

    return (
        <TabsContext.Provider value={store}>
            <div class="tabs tabs-boxed">
                <For each={props.tabList}>
                    {tab => tab}
                </For>
            </div>

            <div className="p-4">
                {tabContent()}
            </div>
        </TabsContext.Provider>
    );
};

export const useTabs = () => useContext(TabsContext)!;