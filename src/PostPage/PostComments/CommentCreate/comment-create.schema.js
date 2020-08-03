import * as Yup from 'yup';

export const CommentCreateSchema = Yup.object().shape({
    content: Yup.string()
        .required()
        .max(150, 'Content is too long'),
});