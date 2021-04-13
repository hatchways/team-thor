import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles((theme) => ({
    appbar: {
        borderBottom: `1px solid ${grey['300']}`,
        backgroundColor: '#fff'
    },
    appbarTitle: {
        fontWeight: 600,
        color: '#000',
        fontSize: '1.2rem',
        flexGrow: 1
    },
    appbarMenuItem: {
        marginLeft: '2rem'
    },
    inlineCenter: {
        textAlign: 'center'
    },
    formHeaderTitle: {
        margin: '1.5rem 0',
        fontSize: '2rem',
        fontWeight: 'bold'
    },
    formHeaderBody: {
        fontSize: '0.8rem',
        marginTop: '1.5rem'
    },
    formHeaderBodyLink: {
        color: '#000'
    },
    submitBtn: {
        color: '#fff',
        backgroundColor: green['A400'],
        '&:hover': {
          backgroundColor: green['A700'],
        },
        marginTop: '3rem',
        padding: '0.9rem 1.7rem'
    },
    paddingTop: {
        paddingTop: '0 !important'
    },
    formWidth: {
        width: '100%'
    }
}))

export default useStyles