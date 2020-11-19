(function(){
    var modules=
	{
        "questionnaire-english-form":           {Table:"incosact",url:"m/questionnaire-english-form.html"},
        "questionnaire-spanish-form":           {Table:"incosact",url:"m/questionnaire-spanish-form.html"},
        "questionnaire-portuguese-form":        {Table:"incosact",url:"m/questionnaire-portuguese-form.html"},
        "questionnaire-turkish-form":           {Table:"incosact",url:"m/questionnaire-turkish-form.html"},
        "questionnaire-japanese-form":          {Table:"incosact",url:"m/questionnaire-japanese-form.html"},
        "questionnaire-canadian-french-form":   {Table:"incosact",url:"m/questionnaire-canadian-french-form.html"},
        "questionnaire-french-form":            {Table:"incosact",url:"m/questionnaire-french-form.html"},
        "questionnaire-german-form":            {Table:"incosact",url:"m/questionnaire-german-form.html"},

        "thanks-english-form":           {url:"m/thanks-english-form.html"},
        "thanks-spanish-form":           {url:"m/thanks-spanish-form.html"},
        "thanks-portuguese-form":        {url:"m/thanks-portuguese-form.html"},
        "thanks-turkish-form":           {url:"m/thanks-turkish-form.html"},
        "thanks-japanese-form":          {url:"m/thanks-japanese-form.html"},
        "thanks-canadian-french-form":   {url:"m/thanks-canadian-french-form.html"},
        "thanks-french-form":            {url:"m/thanks-french-form.html"},
        "thanks-german-form":            {url:"m/thanks-german-form.html"}
	}
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
