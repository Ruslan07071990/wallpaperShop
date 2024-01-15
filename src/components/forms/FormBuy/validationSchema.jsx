import { object,string ,number} from "yup";


const validationSchema = object({
name: string().matches(
    /^[^\d!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/~`-]+$/,
    "Ім'я має складатися з літер"
).required('Це поле є обов\'язковим для заповнення'),
lastName: string().min(3, 'Прізвище має містити більше 3 символів').required('Це поле є обов\'язковим для заповнення'),
age: number().typeError('Має бути число').min(16, 'Мінімльний вік 16 років').required('Це поле є обов\'язковим для заповнення'),
address:string().min(3, 'Адреса має містити більше 3 символів').required('Це поле є обов\'язковим для заповнення'),
phone:string().min(10,'Номер має містити min=10 символів').required('Це поле є обов\'язковим для заповнення'),


})

export default validationSchema