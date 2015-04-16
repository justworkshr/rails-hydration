module RailsHydration
  module HydrationHelper

    def hydration(key, data)
      tag = '<script class="hydration-helper-data" data-hydration-key="' + key + '" type="application/json">'
      tag += data.to_json
      tag += '</script>'
      return tag.html_safe
    end

  end
end
