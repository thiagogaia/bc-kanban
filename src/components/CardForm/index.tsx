import { zodResolver } from '@hookform/resolvers/zod';
import { Check, X } from 'phosphor-react';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { useCards } from '~/hooks/useCards';

import { Buttons, CardContainer, FormControl } from './styles';

const NewItemSchema = z.object({
	title: z.string().min(4, {
		message: 'Informe um título',
	}),
	description: z.string().min(4, {
		message: 'Informe uma descrição',
	}),
	// tags: z.enum(['rocketseat', 'challenge', 'self_care']),
});

type NewItemFormInputs = z.infer<typeof NewItemSchema>;

// const checkInputError = (input: string): boolean =>
// 	Boolean((input?.length as number) > 0);

interface CardFormProps {
	handleClose: () => void;
}

export function CardForm({ handleClose }: CardFormProps): ReactElement {
	const { addItem } = useCards();

	const { register, watch, handleSubmit, reset, formState } =
		useForm<NewItemFormInputs>({
			resolver: zodResolver(NewItemSchema),
		});

	const { errors } = formState;

	const isValidSubmitForm = watch('description') && watch('title');

	function handleNewItem(data: NewItemFormInputs): void {
		addItem({
			content: data.description,
			title: data.title,
			status: 'todo',
			tags: [
				{
					id: uuidv4(),
					name: 'desafio',
				},
			],
			id: uuidv4(),
		});

		reset();

		handleClose();
	}

	return (
		<CardContainer>
			<form onSubmit={handleSubmit(handleNewItem)}>
				<FormControl error={Boolean(errors.title?.message)}>
					<input
						type="text"
						placeholder="Título"
						{...register('title')}
					/>
				</FormControl>

				<FormControl error={Boolean(errors.description?.message)}>
					<textarea
						placeholder="Descrição"
						{...register('description')}
					/>
				</FormControl>

				<Buttons>
					<button
						type="button"
						onClick={handleClose}
					>
						<X
							color="#E7695D"
							size={24}
							weight="bold"
						/>
					</button>

					{isValidSubmitForm && (
						<button type="submit">
							<Check
								color="#96C690"
								size={24}
								weight="bold"
							/>
						</button>
					)}
				</Buttons>
			</form>
		</CardContainer>
	);
}
