import { useNavigate } from "react-router"


export default function Form(props) {
    const { isHidden } = props
    const navigate = useNavigate();
    if (isHidden) return null


    const onSubmit = (e) => {
        e.preventDefault();
        navigate('success');
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <div>
                <div>
                    <label className="form-label">
                        <span>Name:</span>
                        <input className="form-input-info" name='name' type="text" required />
                    </label>
                </div>
                <div>
                    <label className="form-label">
                        <span>Surname:</span>
                        <input className="form-input-info" name='surname' type="text" equired />
                    </label>
                </div>
                <div>
                    <label className="form-label">
                        <span>Address:</span>
                        <input className="form-input-info" type="text" name="address" equired />
                    </label>
                </div>
                <div>
                    <label className="form-label">
                        <span>Phone:</span>
                        <input className="form-input-info" name="phone" type="number" equired />
                    </label>
                </div>
                <div className="form-label">
                    <span>E-mail:</span>
                    <input className="form-input-info" type="email" equired />
                </div>
                <label className="form-label"> Process personal information
                    <input className="form-input-info" type="checkbox" equired />
                </label>
                <div>
                    <button className="form-button">Отправить</button>
                </div>
            </div>

        </form>
    )
} 