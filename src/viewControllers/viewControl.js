export function ViewControl({ visible, children }) {

    if (!visible) {
        return null;
    }

    return <>{children}</>;
}

export default ViewControl;