const install = function(Vue){
    if (install.installed) return
    install.installed = true

    Vue.directive('empty-class', {
        inserted:function(el, binding, vnode){
            el.addEventListener("change", function () { binding.def.componentUpdated(el, binding, vnode)});
            binding.def.componentUpdated(el, binding, vnode)
        },
        componentUpdated: function (el, binding, vnode) {

            function seeVal(obj, key){
                try {
                    return new Function('da', 'return da.'+key)(obj)
                } catch (error) {
                    return undefined
                }
            }

            let elValue = el.value
            let vmo = vnode.data.directives.find(d=>d.rawName == 'v-model');
            if(vmo){
                let vmoExp = vmo.expression
                if(vmoExp){
                    elValue = seeVal(vnode.context, vmoExp) || vmo.value
                }
            }

            if (typeof (binding.value) == 'string') {
                let classname = binding.value || 'default-empty-class', 
                isNotEmpty = elValue && elValue.toString().trim()

                if (isNotEmpty) {
                    el.classList.remove(classname)
                } else {
                    el.classList.add(classname)
                }
            } else{
                throw "Invalid instruction value, which accepts only function or classname";
            }


            
        }
    })
  }
  
  if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
  }
  
  export default {
    install
  }