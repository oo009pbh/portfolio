export interface SIdeMenu {
    onChangeMenu: (index: number) => void;
    menuItem: Array<MEnuItem>;
    mode: string;
}

export interface MEnuItem {
    name: string;
    is_checked: boolean;
}