import * as Yup from 'yup';

export const PostCreateSchema = Yup.object().shape({
	image: Yup.mixed().required('Image is required'),
	description: Yup.string()
		.max(200, 'Description is too long')
});
