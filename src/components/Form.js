function Form() {
    return (
        <form>
            <label for='text'>Ditt namn</label>
            <input type='text' name='text' />
            <label for='time'>Önskad tid</label>
            <input type='time' name='time' value='10:00' />
            <input type='tel' name='tel' placeholder='Telefonnummer' />
            <button>Bekräfta</button>
        </form>
    )
}

export default Form
