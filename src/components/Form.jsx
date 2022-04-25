

export default function Form(props) {
    const {isHidden} = props
    if(isHidden) return null

    return (
        <form className="form">
            <div>
                <label>Name
                <input name='name' type="text" required/>
                </label>
            </div>
            <div>
                <label> Surname
                <input name='surname' type="text" equired/>
                </label>
            </div>
            <div>
                <label> Address
                <input type="text" name="address" equired/>
                </label>
            </div>
            <div>
                <label> Phone
                <input name="phone" type="number"equired/>
                </label>
            </div>
            <div> E-mail
                <input type="email"equired/>
            </div>
            <label> process personal information
                <input type="checkbox" equired/>
            </label>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
} 