import { Question } from './question.model';

export class Quiz {
    titre: string;
    assets_folder: string;
    audio_titre: string;
    audio_solution: string;
    questions: Question[];
}