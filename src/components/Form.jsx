

export default function Form(props) {
    const {isHidden} = props
    if(isHidden) return null

    return (
        <form className="form">
            <div>
                <label className="form-label">Name:
                <input className="form-input-info" name='name' type="text" required/>
                </label>
            </div>
            <div>
                <label className="form-label"> Surname:
                <input className="form-input-info" name='surname' type="text" equired/>
                </label>
            </div>
            <div>
                <label className="form-label"> Address:
                <input className="form-input-info" type="text" name="address" equired/>
                </label>
            </div>
            <div>
                <label className="form-label"> Phone:
                <input className="form-input-info" name="phone" type="number"equired/>
                </label>
            </div>
            <div className="form-label"> E-mail:
                <input className="form-input-info" type="email"equired/>
            </div>
            <label className="form-label"> Process personal information
                <input className="form-input-info" type="checkbox" equired/>
            </label>
            <div>
                <button className="form-button">Отправить</button>
            </div>
        </form>
    )
} 