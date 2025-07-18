import { FC } from "react";
import { Typography } from "@mui/material";
import { useGetProfileQuery } from "@app/core/services/unthreadsApi/profile";

export const Dialogs: FC = () => {
    const { data } = useGetProfileQuery();
    return (
        <>
            <Typography component="h1" variant="h4" gutterBottom align="center">
                Dialogs Page for {data?.username || "Guest"}
            </Typography>
        </>
    );
};
