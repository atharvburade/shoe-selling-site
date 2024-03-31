import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect('mongdbLink', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}

