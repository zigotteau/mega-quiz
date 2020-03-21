export class Question {
    question: string;
    propositions: string[];
    solution: string | number;
    illustration: string;
    video: string;
    audio: string;
    bonus: string;
    options: ('noletter'|'picsol'|'picright'|'2col')[];
}