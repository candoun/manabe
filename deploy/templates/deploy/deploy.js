function getParallelOptions(sp_select_id){
    if (sp_select_id == "parallel_deploy" && $("#p_select_id").length <= 0) {
        html_str = '<select name="p_value"  id="p_select_id"  class="select"> \
                    +      <option selected value="1">1</option> \
                    +      <option value="2">2</option> \
                    +      <option value="3">3</option> \
                    +      <option value="4">4</option> \
                    +      <option value="5">5</option> \
                    +  </select>'
        $("#sp_select").after(html_str);
    }
    if (sp_select_id == "serial_deploy" && $("#p_select_id").length > 0) {
        $("#p_select_id").remove();
    }
}