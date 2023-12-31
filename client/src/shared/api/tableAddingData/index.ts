import {
    ILogList,
    ITableAddingData,
    ITableAddingDataDto,
} from "../../interfaces/models";

import { mainApi } from "../main";

export const tableAddingDataApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        addData: builder.mutation<ITableAddingData, ITableAddingDataDto>({
            query: (data) => ({
                url: "/table-adding-data",
                method: "POST",
                body: data,
            }),
        }),
        getAllString: builder.query<
            ILogList,
            { page: string; limit: string; dateFrom: string; dateTo: string }
        >({
            query: ({ page, limit, dateFrom, dateTo }) => ({
                url: `/table-adding-data/strings/?page=${page}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
                method: "GET",
            }),
        }),
    }),
});
