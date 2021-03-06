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

$("#close_deploylogout").click(function(){
    $('#deploylogout').hide();
    window.location.reload();
});

$("#btn-deploy").click(function(evt){
    evt.preventDefault(); //阻止表单提交，只获取表单内数据
    var group_data = $("#serverForm").serialize();
    var _self = this;
    console.log(group_data);

    if (group_data.indexOf("serverSelect") == -1){
        $.Huimodalalert('<span  class="c-error">请确认所有选项正确！</span>',3000);
        return false;
    }

    $.ajax({
        url:'{% url "deploy:deploy-cmd" %}',
        type: 'post',
        data:{
            group_cmd: group_data,
        },
        dataType: 'json',
        beforeSend: function(){
            $('#btn-deploy').hide();
            url = "/prism/prismlog"
            console.log(url);
            $('#iframe_log').attr('src', url);
            $('#deploylogout').show();
            console.log(group_data);
        },
        success: function(json){
            console.log(json);
        },
        error: function(){
        },
        complete: function(){
        }
    });
});