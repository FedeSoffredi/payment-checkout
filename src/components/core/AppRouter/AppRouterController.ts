class AppRouterController {
    public static generateOptionsParam = (
        list: { [key: string]: string },
    ): string => {
        let options: string = '';

        for (const key in list) {
            options += options === '' ? list[key] : '|' + list[key];
        }

        return options;
    }
}

export default AppRouterController;
