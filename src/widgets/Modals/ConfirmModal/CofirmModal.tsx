import './ConfirmModal.scss'
import { Button } from '@/shared/ui/Button/Button'

interface ConfirmModalProps {
	message: string
	onResolve?: (value: boolean) => void
}

export function CofirmModal({ message, onResolve }: ConfirmModalProps) {
	const onConfirm = () => {
		onResolve?.(true)
	}

	const onCancel = () => {
		onResolve?.(false)
	}

	return (
		<div className="confirm-modal">
			<div className="confirm-modal__body">
				<h2>Confirm Action</h2>
				<p>{message}</p>
				<div className="confirm-modal__buttons">
					<Button
						className="confirm-modal__btn-confirm secondary"
						onClick={onConfirm}
					>
						Yes
					</Button>
					<Button
						onClick={onCancel}
						className="confirm-modal_btn-close primary"
					>
						No
					</Button>
				</div>
			</div>
		</div>
	)
}
