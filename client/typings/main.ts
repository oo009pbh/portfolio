export interface SIdeMenu {
    onChangeMenu: (index: number) => void;
    menuItem: Array<MEnuItem>;
    mode: string;
}

export interface MEnuItem {
    name: string;
    url: string;
    is_checked: boolean;
}

export interface MEssageList {
    messages: Array<MEssages>;
}

export interface MEssages {
    text: string;
    position: string;
}

export interface TImeLine {
    content: string;
    date: string;
    icon: string;
    title: string;
    index: number;
    animation: string;
}

export interface HEader {
    animationMode: string;
}

export interface CIrcle {
    percent: number;
    width: number;
    height: number;
}