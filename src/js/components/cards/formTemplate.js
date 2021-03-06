import makeElement from "../../utils/makeElement";

const formTemplate = function({id, category, isComplete, title, startDate, startTime, endDate, endTime}){
    const template = `
        <form data-key="${id}" class="classForm">
            <div>
                <label>ID</label>
                <input type="text" id="ID" value="${id}">
            </div>
            <div class="classFormFlex">
                <div>
                    <label>Category</label>
                    <input type="text" id="Category" value="${category ? category : ""}">
                </div>
                <div>
                    <label>Completed</label>
                    <input type="checkbox" id="isCompleted" value="${isComplete}" ${isComplete? "checked": ""}>
                </div>
            </div>
            <div>
                <label>Class Name</label>
                <input type="text" id="title" value="${title ? title : ""}">
            </div>
            <div class="classFormFlex">
                <div>
                    <label>Start Date</label>
                    <input type="text" id="startDate" value="${startDate ? startDate : ""}">
                </div>
                <div>
                    <label>Start Time</label>
                    <input type="text" id="startTime" value="${startTime ? startTime : ""}">
                </div>
            </div>
            <div class="classFormFlex">
                <div>
                    <label>End Date</label>
                    <input type="text" id="endDate" value="${endDate ? endDate : ""}">
                </div>
                <div>
                    <label>End Time</label>
                    <input type="text" id="endTime" value="${endTime ? endTime : ""}">
                </div>
            </div>
        </form>
    `;

    return makeElement(template)
}

export default formTemplate