function Form() {
    return (
        <form>
            <input type="text" placeholder="Name" /> <br /><br />
            <input type="email" placeholder="Email" /><br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <input type="text" placeholder="Message" /><br /><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;