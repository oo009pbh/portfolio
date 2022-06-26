export interface SIdeMenu {
    onChangeMenu: (index: number) => void;
    menuItem: Array<MEnuItem>;
    mode: string;
}

export interface MEnuItem {
    name: string;
    is_checked: boolean;
}

export interface MEssageList {
    messages: Array<MEssages>;
}

export interface MEssages {
    text: string;
    position: string;
}