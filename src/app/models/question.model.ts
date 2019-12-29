export class Question {
    question: string;
    propositions: string[];
    solution: string | number;
    illustration: string;
    video: string;
    audio: string;
    options: ('noletter'|'picsol')[];
}