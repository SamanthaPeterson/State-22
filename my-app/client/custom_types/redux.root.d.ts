declare module 'redux-root-types' {
    import { CartItem, Collections } from 'shop-component-types';
    import { Section } from 'directory-component-types';
    
    export type UserState = {
        currentUser: any,
        error: any
    }

    export type CartState = {
        hidden: boolean,
        cartItems: Array<CartItem>
    }

    export type DirectoryState = {
        sections: Section[]
    }

    export type ShopState = {
        collections: Collections | null,
        fetching: boolean,
        errorMessage: any
    }

    export type RootState = {
        user: UserState,
        cart: CartState,
        directory: DirectoryState,
        shop: ShopState
    }

    export type ActionType = {
        type: string,
        payload?: any
    }
}
 
