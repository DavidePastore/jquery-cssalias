/**
 * jquery.cssalias - A jQuery Plugin to aliasify your CSS properties.
 */
(function( $ ) {
	
	$.fn.cssalias = function( action, name, properties ) {
		var element = this;
		
		//Add a new alias with the properties
		if(action == "add"){
			$.fn.cssalias.aliases[name] = properties;
			return this;
		}
		
		//Delete an alias
		if(action == "delete"){
			if($.isArray(name)){
				jQuery.each( name, function( i, val ) {
					delete $.fn.cssalias.aliases[val];
				});
			}
			else{
				delete $.fn.cssalias.aliases[name];
			}
			return this;
		}
		
		
		
		//Get only the selected properties
		if($.isArray(action)){
			//Get all the selected properties in the array
			jQuery.each( action, function( i, val ) {
				if(aliasExists(val)){
					properties = getProperties( properties, $.fn.cssalias.aliases[val], element);
				}
				else{
					throwError(val);
				}
			});
			
			return properties;
		}
		else if(action !== undefined){
			//Get the only one property if it exists
			if(aliasExists(action)){
				return this.css($.fn.cssalias.aliases[action]);
			}
			else{
				throwError(action);
			}
		}
		
		//Get all the CSS properties
		if(action === undefined){
			var properties = {};
			
			jQuery.each( $.fn.cssalias.aliases, function( i, val ) {
				properties = getProperties( properties, val, element);
			});
			
			return properties;
		}
	};
	
	/**
	 * Get the properties from the element and extend the old object.
	 */
	function getProperties( properties, propertiesObject, element ) {
		return $.extend( properties, element.css(propertiesObject) )
	};
	
	
	/**
	 * Check if the alias exists.
	 */
	function aliasExists(alias){
		return $.fn.cssalias.aliases[alias] !== undefined;
	}
	
	
	/**
	 * alias doesn't exist.
	 */
	function throwError(alias){
		throw alias + " alias doesn't exist.";
	}
	
	
	//The container for all the aliases
	$.fn.cssalias.aliases = {};
	
})( jQuery );
