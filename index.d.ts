declare module "am-to-chtml" {

    interface options {
        width?: number,
        ex?: number,
        em?: number,
        fontURL?: string
    }

    export default function AMToCHTML(str: string, opts?: options): string;
}