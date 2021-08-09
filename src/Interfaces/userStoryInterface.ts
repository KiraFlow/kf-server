export interface UserStoryInterface {
    listIndex: number;
    position: number;
    description: string;
    estimation: number;
    title: string;
    creationDate: Date;
    planing: {
        listIndex: number;
        position: number;
    }
}