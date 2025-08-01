import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButtons from "../components/Dashboard/Profile/ProfileButtons";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";

const Profile = () => {
    const [isEditing, setEditing] = useState(false);
    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting }} = useForm();
    const { user, updateUserProfile, changePassword, errorMsg } = useAuthContext();

    useEffect(() => {
        if (user) {
            Object.keys(user).forEach((key) => setValue(key, user[key]));
        }
    }, [user, setValue]);

    const onSubmit = async (data) => {
        try {
            const profilePayload = { first_name: data.first_name, last_name: data.last_name, address: data.address, phone_number: data.phone_number };
            await updateUserProfile(profilePayload);
            if(data.current_password && data.new_password) {
                await changePassword({current_password: data.current_password, new_password: data.new_password});
            }
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
                {errorMsg && <ErrorAlert error={errorMsg}/>}
                <h1 className="card-title text-2xl mb-4">This is profile page</h1>
                <form className="p-6" onSubmit={handleSubmit(onSubmit)}>
                    <ProfileForm register={register} errors={errors} isEditing={isEditing} />
                    <PasswordChangeForm errors={errors} register={register} isEditing={isEditing} watch={watch} />
                    <ProfileButtons isEditing={isEditing} setIsEditing={setEditing} isSubmitting={isSubmitting}/>
                </form>
            </div>
        </div>
    );
};

export default Profile;
