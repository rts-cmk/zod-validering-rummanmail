import z from "zod";
 
const signUpSchema = z.object({
    firstName: z.string().nonempty('Fornavn skal udfyldes'),
    lastName: z.string().nonempty('Efternavn skal udfyldes'),
    email: z.email('Du skal skrive en gyldig email'),
    password: z.string()
    .min(8, 'Password skal være mindst 8 tegn')
    .regex(/[a-zæøå]/, 'Password skal indeholde mindst et lille bogstav')
    .regex(/[A-ZÆØÅ]/, 'Password skal indeholde mindst et stort bogstav')
    .regex(/[\d]/, 'Password skal indeholde mindst et tal')
    .nonempty('Password skal udfyldes')
    .regex(/[\W]/, 'Password skal indeholde mindst et specialtegn'),
    confirmPassword: z.string().nonempty('Du skal gentage din adgangskode'),
    birthDate: z.date(),
    phone: z.coerce.number('Dit telefonnummer må kun indeholde tal').min(10, 'Telefonnummer skal være mindst 8 cifre'),
});
refine(schema => schema.password === schema.confirmPassword,
    {path: ['confirmPassword'], message: 'Adgangskoderne matcher ikke!!'}

)

export default signUpSchema; 