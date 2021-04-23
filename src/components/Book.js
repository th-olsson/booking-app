function Book() {
    return (
        <form>
            <label htmlFor='text'>Ditt namn</label>
            <input type='text' name='text' />
            <label htmlFor='time'>Önskad tid</label>
            <input type='time' name='time' value='10:00' />
            <input type='tel' name='tel' placeholder='Telefonnummer' />
            <button>Bekräfta</button>
        </form>
    )
}

export default Book
