import Swal, { SweetAlertIcon } from "sweetalert2";


export const Alert = (title: string, text: string, icon: SweetAlertIcon) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}