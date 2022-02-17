import React from "react";
import axios from "axios";

class DeleteCard extends React.Component {
    state = {};

    deleteThisCard = async () => {
        try {
            await axios.delete(
                `https://ironrest.herokuapp.com/memes/${this.props.match.params.id}`
            );
            this.props.history.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <div className="container mt-5 text-center">
                <h1>Tem certeza?</h1>
                <button onClick={this.deleteThisCard} className="btn btn-danger m-4 p-3">Confirme aqui!</button>
            </div>
        );
    }
}

export default DeleteCard;